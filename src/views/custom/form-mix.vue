<!--
 * @Author: your name
 * @Date: 2020-07-20 17:18:29
 * @LastEditTime: 2020-07-23 14:37:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\views\form\formMix.vue
-->
<template>
  <div class="form-container-wrap">
    <FormCard>
      <Radio slot="form-item" />
      <Checkbox slot="form-item" />
      <Input slot="form-item" />
      <InputNumber slot="form-item" />
      <Select slot="form-item" />
      <Cascader slot="form-item" />
      <Steps slot="form-item" />
    </FormCard>
  </div>
</template>

<script>
import FormCard from '@/components/Form/FormCard'
import Radio from '@/components/Form/Radio'
import Checkbox from '@/components/Form/Checkbox'
import Input from '@/components/Form/Input'
import InputNumber from '@/components/Form/InputNumber'
import Select from '@/components/Form/Select'
import Cascader from '@/components/Form/Cascader'
import Steps from '@/components/Navigation/Steps'

export default {
  name:'',
  components:{
    FormCard,
    Radio,
    Checkbox,
    Input,
    InputNumber,
    Select,
    Cascader,
    Steps
  },
  data(){
    return{}
  },
  methods:{}
}
</script>

<style lang="scss" scoped>
.form-container-wrap{
  padding: 20px;
}
</style>
