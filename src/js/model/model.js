/**
 * @fileoverview Mixin module for models. it provide simple model validator.
 * @author NHN Ent. FE Development Team <e0242@nhnent.com>
 */
'use strict';

var util = global.ne.util,
    spaceRx = /^\s*|\s*$/g,
    model;

var moment = require('moment');
var isMoment = moment.isMoment;

/**
 * string trim
 * @param {string} str string to trim
 * @returns {string} trimed string
 */
function trim(str) {
    return str.replace(spaceRx, '');
}

/**
 * Mixin module for models.
 * @module ne.dooray.calendar.Model
 * @mixin
 */
model = {
    /**
     * The collections of validator functions.
     */
    validators: {
        /**
         * check all of supplied fields(property) is not undefined or empty string.
         * @param {object} instance model instance.
         * @param {string[]} fields property names to check.
         * @returns {boolean} return true when supplied fields are not undefined or empty string.
         */
        required: function(instance, fields) {
            var valid = true,
                isValid = function(obj) {
                    return !util.isUndefined(obj) && trim(obj) !== '';
                };

            util.forEach(fields, function(fieldName) {
                valid = isValid(instance[fieldName]);
                return valid;
            });

            return valid;
        },

        /**
         * check supplied fields are valid dates and valid date ranges.
         * @param {object} instance model instance.
         * @param {moment[]} fields array of date range (starts, ends)
         * @returns {boolean} is valid date range?
         */
        dateRange: function(instance, fields) {
            var starts,
                ends;

            if (!util.isExisty(instance) || fields.length !== 2) {
                return true;
            }

            starts = instance[fields[0]];
            ends = instance[fields[1]];

            if (!isMoment(starts) || !isMoment(ends)) {
                return false;
            }

            if (starts.isAfter(ends)) {
                return false;
            }

            return true;
        }
    },

    /**
     * Check validate for model instance.
     *
     * The validate are works on a basis of constructor's "schema" property.
     *
     * You can customize validators add some method to model#validators.
     * @returns {Boolean} model is valid?
     */
    isValid: function() {
        var that = this,
            schema = this.constructor.schema,
            validators = model.validators,
            validator,
            valid = true;

        if (!schema) {
            return true;
        }

        util.forEach(schema, function(values, validatorName) {
            validator = validators[validatorName];

            if (validator) {
                valid = validator(that, values);
                return valid;
            }
        });

        return valid;
    },

    /**
     * Mixin model module to supplied target.
     * @param {Object} target The object of want to mixed.
     * @example
     * function Man() {
     *     this.name = 'john';
     * }
     * model.mixin(Man.prototype);
     */
    mixin: function(target) {
        util.forEach(model, function(method, name) {
            if (name !== 'mixin') {
                target[name] = method;
            }
        });
    }
};

module.exports = model;
