<template>
  <div>
    <fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" ref="generateForm">

    </fm-generate-form>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        jsonData: {
          'list':
            [{
            'type': 'text',
            'icon': 'icon-wenzishezhi-',
            'options': {'defaultValue': '', 'customClass': '', 'remoteFunc': 'func_1726194406000_85405'},
            'name': '特种作业报名',
            'key': '1726194406000_85405',
            'model': 'title',
            'rules': []
          }, {
            'type': 'input',
            'icon': 'icon-input',
            'options': {
              'width': '100%',
              'defaultValue': '',
              'required': true,
              'dataType': 'string',
              'pattern': '',
              'placeholder': '',
              'disabled': false,
              'maxlength': -1,
              'showWordLimit': false,
              'remoteFunc': 'func_1726191009000_60017'
            },
            'name': '姓名',
            'key': '1726191009000_60017',
            'model': 'name',
            'rules': [{'type': 'string', 'message': '姓名格式不正确'}]
          }, {
            'type': 'input',
            'icon': 'icon-input',
            'options': {
              'width': '100%',
              'defaultValue': '',
              'required': true,
              'dataType': 'int',
              'pattern': '',
              'placeholder': '',
              'disabled': false,
              'maxlength': -1,
              'showWordLimit': false,
              'remoteFunc': 'func_1726193118000_71463'
            },
            'name': '年龄',
            'key': '1726193118000_71463',
            'model': 'age',
            'rules': [{'type': 'int', 'message': '年龄格式不正确'}]
          }, {
            'type': 'input',
            'icon': 'icon-input',
            'options': {
              'width': '100%',
              'defaultValue': '',
              'required': true,
              'dataType': 'string',
              'pattern': '',
              'placeholder': '',
              'disabled': false,
              'maxlength': -1,
              'showWordLimit': false,
              'remoteFunc': 'func_1726193356000_13546'
            },
            'name': '身份证号',
            'key': '1726193356000_13546',
            'model': 'cert_no',
            'rules': [{'type': 'string', 'message': '身份证号格式不正确'}]
          }, {
            'type': 'input',
            'icon': 'icon-input',
            'options': {
              'width': '100%',
              'defaultValue': '',
              'required': true,
              'dataType': 'int',
              'pattern': '',
              'placeholder': '',
              'disabled': false,
              'maxlength': -1,
              'showWordLimit': false,
              'remoteFunc': 'func_1726193691000_49'
            },
            'name': '手机号',
            'key': '1726193691000_49',
            'model': 'phone',
            'rules': [{'type': 'int', 'message': '手机号格式不正确'}]
          }, {
            'type': 'input',
            'icon': 'icon-input',
            'options': {
              'width': '100%',
              'defaultValue': '',
              'required': true,
              'dataType': 'string',
              'pattern': '',
              'placeholder': '请输入单位名称',
              'disabled': false,
              'maxlength': -1,
              'showWordLimit': false,
              'remoteFunc': 'func_1726193642000_15347'
            },
            'name': '单位名称',
            'key': '1726193642000_15347',
            'model': 'input_1726193642000_15347',
            'rules': [{'type': 'string', 'message': '单位名称格式不正确'}]
          }, {
            'type': 'input',
            'icon': 'icon-input',
            'options': {
              'width': '100%',
              'defaultValue': '请输入学历',
              'required': false,
              'dataType': 'string',
              'pattern': '',
              'placeholder': '',
              'disabled': false,
              'maxlength': -1,
              'showWordLimit': false,
              'remoteFunc': 'func_1726195407000_58312'
            },
            'name': '学历',
            'key': '1726195407000_58312',
            'model': 'input_1726195407000_58312',
            'rules': [{'type': 'string', 'message': '学历格式不正确'}]
          }, {
            'type': 'date',
            'icon': 'icon-date',
            'options': {
              'defaultValue': '',
              'readonly': false,
              'disabled': false,
              'editable': true,
              'clearable': true,
              'placeholder': '',
              'startPlaceholder': '',
              'endPlaceholder': '',
              'type': 'date',
              'format': 'yyyy-MM-dd',
              'timestamp': false,
              'required': false,
              'width': '',
              'remoteFunc': 'func_1726193139000_45590'
            },
            'name': '生日',
            'key': '1726193139000_45590',
            'model': 'birthday',
            'rules': []
          }, {
            'type': 'select',
            'icon': 'icon-select',
            'options': {
              'defaultValue': '',
              'multiple': false,
              'disabled': false,
              'clearable': false,
              'placeholder': '请选择性别',
              'required': false,
              'showLabel': false,
              'width': '',
              'options': [{'value': '男'}, {'value': '女'}],
              'remote': false,
              'filterable': false,
              'remoteOptions': [],
              'props': {'value': 'value', 'label': 'label'},
              'remoteFunc': 'func_1726193053000_88061'
            },
            'name': '性别',
            'key': '1726193053000_88061',
            'model': 'gender',
            'rules': []
          }, {
            'type': 'select',
            'icon': 'icon-select',
            'options': {
              'defaultValue': '',
              'multiple': false,
              'disabled': false,
              'clearable': false,
              'placeholder': '',
              'required': false,
              'showLabel': false,
              'width': '',
              'options': [{'value': '取证'}, {'value': '复审'}],
              'remote': true,
              'filterable': false,
              'remoteOptions': [],
              'props': {'value': 'value', 'label': 'label'},
              'remoteFunc': 'firstQualifiedFunc'
            },
            'name': '取证/复审',
            'key': '1726191111000_75885',
            'model': 'first_qualified',
            'rules': []
          }, {
            'type': 'select',
            'icon': 'icon-select',
            'options': {
              'defaultValue': '',
              'multiple': false,
              'disabled': false,
              'clearable': false,
              'placeholder': '',
              'required': false,
              'showLabel': false,
              'width': '',
              'options': [{'value': '低压电工作业'}, {'value': '高压电工作业'}, {'value': '电力电缆作业'}, {'value': '继电保护作业'}, {'value': '电气试验作业'}, {'value': '防爆电气作业'}, {'value': '熔化焊接与热切割作业'}, {'value': '压力焊作业'}, {'value': '登高架设作业'}, {'value': '高处安装、维护、拆除作业'}, {'value': '制冷与空调设备运行操作作业'}, {'value': '制冷与空调设备安装修理作业'}, {'value': '地下有限空间监护作业'}],
              'remote': false,
              'filterable': false,
              'remoteOptions': [],
              'props': {'value': 'value', 'label': 'label'},
              'remoteFunc': 'func_1726193887000_26943'
            },
            'name': '报名工种',
            'key': '1726193887000_26943',
            'model': 'work_type',
            'rules': []
          }, {
            'type': 'date',
            'icon': 'icon-date',
            'options': {
              'defaultValue': '',
              'readonly': false,
              'disabled': false,
              'editable': true,
              'clearable': true,
              'placeholder': '',
              'startPlaceholder': '',
              'endPlaceholder': '',
              'type': 'date',
              'format': 'yyyy-MM-dd',
              'timestamp': false,
              'required': false,
              'width': '',
              'remoteFunc': 'func_1726194826000_74103'
            },
            'name': '初次领证日期',
            'key': '1726194826000_74103',
            'model': 'first_qualified_date',
            'rules': []
          }, {
            'type': 'date',
            'icon': 'icon-date',
            'options': {
              'defaultValue': '',
              'readonly': false,
              'disabled': false,
              'editable': true,
              'clearable': true,
              'placeholder': '',
              'startPlaceholder': '',
              'endPlaceholder': '',
              'type': 'date',
              'format': 'yyyy-MM-dd',
              'timestamp': false,
              'required': false,
              'width': '',
              'remoteFunc': 'func_1726194894000_7425'
            },
            'name': '上次复审日期',
            'key': '1726194894000_7425',
            'model': 'last_check_date',
            'rules': []
          }, {
            'type': 'input',
            'icon': 'icon-input',
            'options': {
              'width': '100%',
              'defaultValue': '',
              'required': false,
              'dataType': 'string',
              'pattern': '',
              'placeholder': '',
              'disabled': false,
              'maxlength': -1,
              'showWordLimit': false,
              'remoteFunc': 'func_1726194957000_99318'
            },
            'name': '工种证件编号',
            'key': '1726194957000_99318',
            'model': 'work_cert_no',
            'rules': [{'type': 'string', 'message': '工种证件编号格式不正确'}]
          }], 'config':
            {
    'labelWidth': 100,
    'labelPosition': 'left',
    'size': 'default',
    'customClass': '',
    'ui': 'element',
    'layout': 'horizontal',
    'width': '100%',
    'hideLabel': false,
    'hideErrorMessage': false,
    'eventScript': [{'key': 'mounted', 'name': 'mounted', 'func': ''}, {
      'key': 'refresh',
      'name': 'refresh',
      'func': ''
    }, {'key': 'onFormChange', 'name': 'onFormChange', 'type': 'rule'}],
    'platform': 'mobile'
  }
        },
        editData: {},
        remoteFuncs: {

          firstQualifiedFunc (resolve) {
            // 取证/复审 first_qualified
            // Call callback function once get the data from remote server
            // resolve(data)
          },

        }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.generateForm.getData().then(data => {
          // data check success
          // data - form data
        }).catch(e => {
          // data check failed
        })
      }
    }
  }
</script>
