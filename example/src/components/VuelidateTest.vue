<template>
<div>
    <label for="positiveNumber">The following field must be filled with positive number: </label>
    <div>
        <input v-model="$v.positiveNumber.$model" id="positiveNumber">
        <div class="error" v-if="!$v.positiveNumber.required">Field is required</div>
        <div class="error" v-if="!$v.positiveNumber.positive">Field must be a positive number</div>
        <pre>{{$v.positiveNumber}}</pre>
    </div>
</div>
</template>

<script>
import { Validate } from 'vuelidate-property-decorators'
import { Component, Vue } from 'vue-property-decorator'
import { required } from 'vuelidate/lib/validators'

function positive (value) {
  try {
    const val = parseFloat(value)
    return val > 0
  } catch (e) {
    return false
  }
}

export default @Component({})
class AddressForm extends Vue {

  @Validate({
    required,
    positive
  })
  positiveNumber = '';

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
