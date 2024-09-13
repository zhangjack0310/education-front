<!--<template>-->
  <!--<div>-->

<!--&lt;!&ndash;<van-cell is-link @click="showPopup">选择生日</van-cell>&ndash;&gt;-->

<!--&lt;!&ndash;<van-popup v-model="showBirthPicker" style="height: 40%; width: 90%;">&ndash;&gt;-->
  <!--&lt;!&ndash;<van-datetime-picker&ndash;&gt;-->
  <!--&lt;!&ndash;v-model="currentDate"&ndash;&gt;-->
  <!--&lt;!&ndash;type="date"&ndash;&gt;-->
  <!--&lt;!&ndash;:min-date="startDate"&ndash;&gt;-->
  <!--&lt;!&ndash;:formatter="dateFormatter"&ndash;&gt;-->
  <!--&lt;!&ndash;@confirm="confirmBirth"&ndash;&gt;-->
  <!--&lt;!&ndash;@cancel="cancelBirth"&ndash;&gt;-->
<!--&lt;!&ndash;/>&ndash;&gt;-->
<!--&lt;!&ndash;</van-popup>&ndash;&gt;-->





    <!--<template>-->
  <!--<fm-making-form-->
    <!--ref="makingform"-->
    <!--style="height: 500px;"-->
    <!--preview-->
    <!--generate-code-->
    <!--generate-json-->
    <!--clearable="true"-->
    <!---->
  <!--&gt;-->
    <!--<template slot="action">-->
    <!--</template>-->
  <!--</fm-making-form>-->
<!--</template>-->




    <!--&lt;!&ndash;<mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>&ndash;&gt;-->
    <!--&lt;!&ndash;<mt-field label="性别" placeholder="请选择性别" v-model="name"></mt-field>&ndash;&gt;-->
    <!--&lt;!&ndash;<mt-radio&ndash;&gt;-->
      <!--&lt;!&ndash;align="right"&ndash;&gt;-->
      <!--&lt;!&ndash;title="请选择性别"&ndash;&gt;-->
      <!--&lt;!&ndash;v-model="value"&ndash;&gt;-->
      <!--&lt;!&ndash;:options="{'male': '男', 'female': '女'}">&ndash;&gt;-->
    <!--&lt;!&ndash;</mt-radio>&ndash;&gt;-->
    <!--&lt;!&ndash;<mt-field label="生日" placeholder="请选择生日" v-model="birthday" v-lfcous></mt-field>&ndash;&gt;-->
    <!--&lt;!&ndash;<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>&ndash;&gt;-->
    <!--&lt;!&ndash;<mt-field label="工种类别" placeholder="请选择工种类别"  v-model="website"></mt-field>&ndash;&gt;-->
    <!--&lt;!&ndash;<mt-picker ref="workPicker" :slots="slots" @change="onValuesChange"></mt-picker>&ndash;&gt;-->
    <!--&lt;!&ndash;<mt-field label="数字" placeholder="请输入数字"  v-model="number"></mt-field>&ndash;&gt;-->

    <!--&lt;!&ndash;<mt-actionsheet&ndash;&gt;-->
  <!--&lt;!&ndash;:actions="workTypes"&ndash;&gt;-->
  <!--&lt;!&ndash;v-model="workTypesVisible">&ndash;&gt;-->
<!--&lt;!&ndash;</mt-actionsheet>&ndash;&gt;-->


    <!--&lt;!&ndash;<mt-datetime-picker&ndash;&gt;-->
      <!--&lt;!&ndash;ref="birthPicker"&ndash;&gt;-->
      <!--&lt;!&ndash;type="date"&ndash;&gt;-->
      <!--&lt;!&ndash;v-model="pickerValue"&ndash;&gt;-->
      <!--&lt;!&ndash;:start-date="startDate"&ndash;&gt;-->
    <!--&lt;!&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;</mt-datetime-picker>&ndash;&gt;-->


    <!--&lt;!&ndash;<mt-button type="default" @click="openBirthPicker">选择生日</mt-button>&ndash;&gt;-->
    <!--&lt;!&ndash;<mt-button type="primary">选择工种</mt-button>&ndash;&gt;-->
    <!--&lt;!&ndash;<mt-button type="danger">danger</mt-button>&ndash;&gt;-->


    <!--&lt;!&ndash;<mt-radio&ndash;&gt;-->
      <!--&lt;!&ndash;align="right"&ndash;&gt;-->
      <!--&lt;!&ndash;title="请选择性别"&ndash;&gt;-->
      <!--&lt;!&ndash;v-model="value"&ndash;&gt;-->
      <!--&lt;!&ndash;:options="{'male': '男', 'female': '女'}">&ndash;&gt;-->
    <!--&lt;!&ndash;</mt-radio>&ndash;&gt;-->


    <!--<router-view/>-->

  <!--</div>-->


<!--</template>-->

<!--<script>-->
  <!--import Vue from 'vue'-->
  <!--Vue.directive('lfcous', function(el, pra, a) {-->
    <!--let oInput = el.querySelector('input');-->
    <!--oInput.onfocus = function() {-->
      <!--a.context.$refs.birthPicker.open()-->
    <!--};-->
<!--})-->

  <!--export default {-->

    <!--name: 'Form',-->
    <!--data () {-->
      <!--return {-->
        <!--message: '',-->
        <!--message2: '菜鸟教程\r\nhttps://www.runoob.com',-->
        <!--name: '',-->
        <!--sex: '',-->
        <!--date: '2222',-->
        <!--startDate: new Date(new Date().getFullYear() - 70, 0, 1),-->
        <!--currentDate: new Date(),-->
        <!--workTypes: ["电工作业", "焊接与热切割作业", "高处作业", "有限空间作业"],-->
        <!--workTypesVisible: true,-->
        <!--showBirthPicker: false,-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--onValuesChange () {-->
        <!--console.log('change')-->
      <!--},-->
      <!--openBirthPicker () {-->
        <!--console.log(111)-->
        <!--this.$refs.birthPicker.open()-->
      <!--},-->
      <!--birthOnFocus () {-->
        <!--console.log(2222)-->
        <!--this.$refs.birthPicker.open()-->
      <!--},-->
      <!--openWorkPicker(){-->
        <!--this.$refs.workPicker.open()-->
      <!--},-->
      <!--showPopup() {-->
      <!--this.showBirthPicker = true;-->
    <!--},-->
      <!--confirmBirth(e) {-->
        <!--console.log(e)-->

        <!--this.showBirthPicker = false;-->
      <!--},-->
      <!--cancelBirth() {-->
        <!--this.showBirthPicker = false;-->
      <!--},-->
    <!--}-->
  <!--}-->
<!--</script>-->
