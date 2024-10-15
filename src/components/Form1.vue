<template>
  <div>
    <p style="text-align: center">特种作业报名</p>
    <div style="width: 80%">
      <fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" @on-change="onChange"
                        ref="generateForm">

      </fm-generate-form>
      <!--<el-cascader-->
      <!--v-model="value"-->
      <!--:options="cityData"-->
      <!--@change="cityChange"></el-cascader>-->
      <span class="upload-title el-form-item__label">个人健康承诺书</span>
      <el-upload
        action="https://paqu2.oss-cn-beijing.aliyuncs.com"
        :http-request="uploadSectionFile1"
        show-file-list="false"
        list-type="picture-card"
        name="health"
        ref="upload1"
        :limit="1"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove1"
        :disabled="uploadDisable"
        :on-exceed="fileAlert"
      >
        <i class="el-icon-plus"></i>
      </el-upload>

      <span class="upload-title el-form-item__label">身份证扫描件</span>
      <el-upload
        action="https://paqu2.oss-cn-beijing.aliyuncs.com"
        :http-request="uploadSectionFile1"
        list-type="picture-card"
        name="cert_scan"
        ref="upload1"
        :limit="1"
        :on-exceed="fileAlert"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove1"
        :disabled="uploadDisable"
      >
        <i class="el-icon-plus"></i>
      </el-upload>

      <span class="upload-title el-form-item__label">一寸照片</span>
      <el-upload
        action="https://paqu2.oss-cn-beijing.aliyuncs.com"
        :http-request="uploadSectionFile1"
        list-type="picture-card"
        name="person_pic"
        ref="upload1"
        :limit="1"
        :on-exceed="fileAlert"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove1"
        :disabled="uploadDisable"
      >
        <i class="el-icon-plus"></i>
      </el-upload>

      <span class="upload-title el-form-item__label">学历复印件扫描件</span>
      <el-upload
        action="https://paqu2.oss-cn-beijing.aliyuncs.com"
        :http-request="uploadSectionFile1"
        list-type="picture-card"
        name="education_scan"
        ref="upload1"
        :limit="1"
        :on-exceed="fileAlert"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove1"
        :disabled="uploadDisable"
      >
        <i class="el-icon-plus"></i>
      </el-upload>


      <el-button type="primary" @click="handleSubmit">提交</el-button>
    </div>
  </div>
</template>

<script>
  import api from './../../utils/api'
  import cityCode from './../province.js'
  import {Message} from 'element-ui'
  import axios from 'axios'

  export default {
    data () {
      return {
        uploadDisable: false,
        filenameFront: '',
        fileNameObj: {
          'health': {
            'name': '个人健康承诺',
          },
          'cert_scan': {
            'name': '身份证件信息'
          },
          'person_pic': {
            'name': '',
          },
          'education_scan': {
            'name': '学历证明'
          },
        },
        health_file_url: '',
        cert_scan_url: '',
        person_pic_url: '',
        education_scan_url: '',
        cityData: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }]
          }]
        }],
        jsonData: {
          'list':
            [{
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
                'dataType': 'string',
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
              'rules': [{'type': 'string', 'message': '年龄格式不正确'}]
            }, {
              'type': 'input',
              'icon': 'icon-input',
              'options': {
                'width': '100%',
                'defaultValue': '',
                'required': true,
                'dataType': 'string',
                'pattern': '^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}[0-9Xx]$',
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
                'dataType': 'string',
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
              'rules': [{'type': 'string', 'message': '手机号格式不正确'}]
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
              'model': 'company',
              'rules': [{'type': 'string', 'message': '单位名称格式不正确'}]
            }, {
              'type': 'input',
              'icon': 'icon-input',
              'options': {
                'width': '100%',
                'defaultValue': '',
                'required': true,
                'dataType': 'string',
                'pattern': '',
                'placeholder': '请填写学历',
                'disabled': false,
                'maxlength': -1,
                'showWordLimit': false,
                'remoteFunc': 'func_1726195407000_58312'
              },
              'name': '学历',
              'key': '1726195407000_58320',
              'model': 'education',
              'rules': [{'type': 'string', 'message': '学历格式不正确'}]
            },

              {
                'type': 'input',
                'icon': 'icon-input',
                'options': {
                  'width': '100%',
                  'defaultValue': '',
                  'required': true,
                  'dataType': 'string',
                  'pattern': '',
                  'placeholder': '户籍所在地 - 省',
                  'disabled': false,
                  'maxlength': -1,
                  'showWordLimit': false,
                  'remoteFunc': 'func_1726195407000_58321'
                },
                'name': '省',
                'key': '1726195407000_58313',
                'model': 'province',
                'rules': [{'type': 'string', 'message': '学历格式不正确'}]
              },
              {
                'type': 'input',
                'icon': 'icon-input',
                'options': {
                  'width': '100%',
                  'defaultValue': '',
                  'required': true,
                  'dataType': 'string',
                  'pattern': '',
                  'placeholder': '户籍所在地 - 市',
                  'disabled': false,
                  'maxlength': -1,
                  'showWordLimit': false,
                  'remoteFunc': 'func_1726195407000_58322'
                },
                'name': '市',
                'key': '1726195407000_58314',
                'model': 'city',
                'rules': [{'type': 'string', 'message': '学历格式不正确'}]
              },
              {
                'type': 'input',
                'icon': 'icon-input',
                'options': {
                  'width': '100%',
                  'defaultValue': '',
                  'required': true,
                  'dataType': 'string',
                  'pattern': '',
                  'placeholder': '户籍所在地 - 区',
                  'disabled': false,
                  'maxlength': -1,
                  'showWordLimit': false,
                  'remoteFunc': 'func_1726195407000_58315'
                },
                'name': '区',
                'key': '1726195407000_58323',
                'model': 'area',
                'rules': [{'type': 'string', 'message': '学历格式不正确'}]
              },

              {
                'type': 'date',
                'icon': 'icon-date',
                'options': {
                  'defaultValue': '',
                  'readonly': false,
                  'disabled': false,
                  'editable': false,
                  'clearable': true,
                  'placeholder': '',
                  'startPlaceholder': '',
                  'endPlaceholder': '',
                  'type': 'date',
                  'format': 'yyyy-MM-dd',
                  'timestamp': false,
                  'required': true,
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
                'required': true,
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
                'required': true,
                'showLabel': false,
                'width': '',
                'options': [{'value': '取证'}, {'value': '复审'}],
                'remote': false,
                'filterable': false,
                'remoteOptions': [],
                'props': {'value': 'value', 'label': 'label'},
                'remoteFunc': 'func_1726193053000_88062'
              },
              'name': '取证/复审',
              'key': '1726193053000_88062',
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
                'required': true,
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
              'model': 'work_project',
              'rules': []
            }, {
              'type': 'date',
              'icon': 'icon-date',
              'options': {
                'display': false,
                'defaultValue': '',
                'readonly': false,
                'disabled': false,
                'editable': false,
                'clearable': true,
                'placeholder': '取证不填写，复审填写',
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
                'editable': false,
                'clearable': true,
                'placeholder': '取证不填写，复审填写',
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
                'placeholder': '取证不填写，复审填写',
                'disabled': false,
                'maxlength': -1,
                'showWordLimit': false,
                'remoteFunc': 'func_1726194957000_99318'
              },
              'name': '工种证件编号',
              'key': '1726194957000_99318',
              'model': 'work_cert_no',
              'rules': [{'type': 'string', 'message': '工种证件编号格式不正确'}]
            }
            ], 'config': {'labelWidth': 100, 'labelPosition': 'right', 'size': 'mini', 'platform': 'mobile'}
        },
        additionalData: [],
        editData: {},
        remoteFuncs: {
          //
          // firstQualifiedFunc (resolve) {
          //   console.log("FFF", resolve)
          //   // 取证/复审 first_qualified
          //   // Call callback function once get the data from remote server
          //   // resolve(data)
          // },

        }
      }
    },
    methods: {
      onChange (field, value, data) {
        if (field === 'cert_no' || 'name') {
          this.$refs.generateForm.getData().then(data => {
            if (data['name'] && data['cert_no']) {
              this.uploadDisable = false
              this.filenameFront = data['cert_no']
            } else {
              this.uploadDisable = true
              this.filenameFront = ''
            }
          })

        }
      },
      fileAlert () {
        this.$message.error('已超过最大上传数量！')
      },
      handleSubmit () {
        console.log(this.$refs.generateForm.getData())
        this.$refs.generateForm.getData().then(data => {
          console.log('data', data)
          data['health_file_url'] = this.health_file_url
          data['cert_scan_url'] = this.cert_scan_url
          data['person_pic_url'] = this.person_pic_url
          data['education_scan_url'] = this.education_scan_url
          api.insert_student(data).then((res) => {
            console.log(res)
            if (res.data.insert === true) {
              Message.success('报名成功')
              this.$refs.generateForm.reset()
            } else {
              if (res.data.reason) {
                Message.error(res.data.reason)
              } else {
                Message.error('报名失败，请联系相关老师处理')
              }

            }
          }).catch((err) => {
            this.$message.error(err)
          })
          // data check success
          // data - form data
        }).catch(e => {
          console.log('error', error)
          // data check failed
        })
      },

      random_string (len) {
        len = len || 32
        let timestamp = new Date().getTime()
        let chars =
          'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' + timestamp
        let maxPos = chars.length
        let pwd = ''
        for (let i = 0; i < len; i++) {
          pwd += chars.charAt(Math.floor(Math.random() * maxPos))
        }
        return pwd
      },
      get_suffix (filename) {
        let pos = filename.lastIndexOf('.')
        let suffix = ''
        if (pos !== -1) {
          suffix = filename.substring(pos)
        }
        return suffix
      },
      handleRemove1 () {
        this.dialogImg = ''
      },
      handlePictureCardPreview (url) {
        this.dialogImageUrl = url
        this.dialogVisible = true
      },
      uploadSectionFile1 (param) {
        console.log(param)
        console.log(param.name)
        api
          .getOSSToken()
          .then((res) => {
            if (res.code === 1) {
              let file = param.file
              if (
                file.type !== 'image/jpeg' &&
                file.type !== 'image/jpg'
              ) {
                this.$message.error('只能上传jpg格式')
                return false
              }
              const kb = file.size / 1000
              if (!(kb < 300)) {
                this.$message.error('图片大小不能超过300kB!')
                return false
              }
              let form_data = new FormData()
              console.log(this.fileNameObj, param.filename, this.fileNameObj[param.filename]['name'])
              var file_path
              if (param.filename === "person_pic") {
                file_path = res.data.dir + this.filenameFront + '.jpg'
              } else {
                file_path = res.data.dir + this.filenameFront + '_' + this.fileNameObj[param.filename]['name'] + '.jpg'
              }

              let policyBase64 = res.data.policy
              let sig = res.data.signature
              let accessid = res.data.accessid
              form_data.append('key', file_path)
              form_data.append('policy', policyBase64)
              form_data.append('OSSAccessKeyId', accessid)
              form_data.append('signature', sig)
              form_data.append('file', file)
              const CancelToken = axios.CancelToken
              axios
                .post(
                  'https://paqu2.oss-cn-beijing.aliyuncs.com',
                  form_data,
                  {withCredentials: false},
                  {
                    onUploadProgress: (event) => {
                      event.percent = Math.round(
                        (event.loaded / event.total) * 100
                      )
                      this.onProgress(event)
                    },
                    cancelToken: new CancelToken((c) => {
                      this.cancel = c
                    }),
                  }
                )
                .then(() => {
                  this.succeed(file)
                })
                .catch(() => {
                  this.tmpfile = file_path
                  let url = this.$options.filters.check_img(this.tmpfile)
                  param.url = url
                  if (param.filename === 'health') {
                    this.health_file_url = url
                  } else if (param.filename === 'cert_scan') {
                    this.cert_scan_url = url
                  } else if (param.filename === 'person_pic') {
                    this.person_pic_url = url
                  } else if (param.filename === 'education_scan') {
                    this.education_scan_url = url
                  }
                  this.$message({
                    message: '上传成功',
                    type: 'success',
                  })

                })
            }
          })
          .catch((err) => {
            console.log(err)
            this.$message.error(err.msg)
          })
      },
    }
  }
</script>

<style>
  .el-picker-panel {
    width: 70%;
  }

  .el-date-picker {
    width: 70%;
  }

  .el-popper {
    width: 70%;
  }

  .el-picker-panel__content {
    width: 85% !important;
  }
</style>
