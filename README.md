# vuelidate property decorators

This library provides a thin wrapper of 
[vuelidate](https://vuelidate.netlify.com/) 
library to simplify its usage with `vue-class-component`
or `vue-property-decorator`.

## Installation

```bash
yarn add vuelidate-property-decorators
```

## Usage

Set up `vuelidate` library as described in (https://vuelidate.netlify.com/#sub-installation).

Then on your component:

### Validating single field

To set per-field validation, use the `@Validate` decorator:

```javascript

import {Validate} from 'vuelidate-property-decorators';
import {required} from 'vuelidate/lib/validators'

@Component({})
export default class AddressForm extends Vue {

    @Validate({required})
    firstName = '';

    @Validate({required})
    lastName = '';

}

```

Template (pug in this case) looks the same way as in pure `vuelidate`:

```pug
.form-group
    q-input(v-model="$v.firstName.$model")
    .error(v-if="!$v.firstName.required") Field is required

.form-group
    q-input(v-model="$v.lastName.$model")
    .error(v-if="!$v.lastName.required") Field is required
```

### Setting validation for all fields at once

To set the validation for all fields at once, use `@Validations` decorator:


```javascript

import {Validations} from 'vuelidate-property-decorators';
import {required} from 'vuelidate/lib/validators'

@Component({})
export default class AddressForm extends Vue {

    firstName = '';
    lastName = '';

    @Validations()
    validations = {
        firstName: {required},
        lastName: {required}
    }

}

```

## Dynamic validations

Both the argument of `@Validate(...)` and the value of `@Validations()`
can be a function. In this case the function is called (reactively)
with `this` set to the component instance.

Example:

```javascript

import {Validate, Validations} from 'vuelidate-property-decorators';
import {required} from 'vuelidate/lib/validators'

@Component({})
export default class AddressForm extends Vue {

    firstName = '';
    lastName = '';

    isRequired = false;

    @Validations()
    validations() {
        if (this.isRequired) {
            return {
                firstName: {required},
                lastName: {required}
            }
        }
        return {}
    }
    
    @Validate(() => {
        if (this.isRequired) {
            return {required}
        }
        return {}
    })
    test = '';
}

```
