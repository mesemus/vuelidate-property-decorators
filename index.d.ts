/** vuelidate-property-decorators verson 1.0.0 MIT LICENSE copyright 2019 mesemus
 *
 * https://github.com/mesemus/vuelidate-property-decorators
 *
 **/

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
export declare function Validations(): PropertyDecorator;


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
export declare function Validate(rules: any): PropertyDecorator;
