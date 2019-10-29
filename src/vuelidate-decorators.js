// @flow

/** vuelidate-property-decorators MIT LICENSE copyright 2019 Mirek Simek
 *
 * https://github.com/mesemus/vuelidate-property-decorators
 *
 **/

import { createDecorator, mixins } from 'vue-class-component';

const validationCreator = function () {
    const validations = this.$vnode.componentOptions.Ctor.options.__validations || {};
    const ret = { };
    for (const k in validations) {
        if (!validations.hasOwnProperty(k)) continue;
        let val = validations[k];
        if (k === '__validations__') {
            val = this[val];
        }
        if (typeof val === "function") {
            val = val.call(this);
        }
        if (k === '__validations__') {
            Object.assign(ret, val)
        } else {
            ret[k] = val;
        }
    }
    return ret;
};

/**
 * decorator for validations for all fields. Usage:
 *
 * import {Component, Vue, Prop, Watch, Emit} from 'vue-property-decorator';
 * import {required} from 'vuelidate/lib/validators'
 *
 * @Component({})
 * class Blah extends Vue {
 *
 *     name = '';
 *
 *     @Validations()
 *     validations = {
 *         name: {required},
 *     }
 * }
 *
 *
 * Template:
 *
 * <q-input v-model="$v.name.$model">
 *
 * validations may be a function which gets "this" pointing to the component instance:
 *
 * @Validations()
 * validations() {
 *     return {
 *         // something with this.
 *     }
 * }
 *
 */
export function Validations(): PropertyDecorator {
    return createDecorator((componentOptions, k) => {
        if (!componentOptions.__validations) {
            componentOptions.__validations = {};
        }
        componentOptions.__validations['__validations__'] = k;
        componentOptions.validations = validationCreator;
    })
}

/**
 * decorator for a validation on a single field. Usage:
 *
 * import {Component, Vue, Prop, Watch, Emit} from 'vue-property-decorator';
 * import {required} from 'vuelidate/lib/validators'
 *
 * @Component({})
 * class Blah extends Vue {
 *
 *     @Validate({required}})
 *     name = '';
 *
 * }
 *
 * Template:
 *
 * <q-input v-model="$v.name.$model">
 *
 * validation options may be a function which gets "this" pointing to the component instance:
 *
 *     @Validate(() => ({'minLen': minLength(this.dynamicMinLength) }) )
 *     name = ''
 */
export function Validate(rules: any): PropertyDecorator {
    return createDecorator((componentOptions, k) => {
        if (!componentOptions.__validations) {
            componentOptions.__validations = {};
        }
        componentOptions.__validations[k] = rules;
        componentOptions.validations = validationCreator;
    });
}
