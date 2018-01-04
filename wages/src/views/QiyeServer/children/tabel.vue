<template>
  <div>
    <chart :options="polar"></chart> 
    <el-row>
      <el-col :span="12">
        <el-form :inline="true"  class="demo-form-inline">
          <el-form-item >
            <el-input placeholder="搜索姓名，手机号" size="mini" prefix-icon="el-icon-search"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form :inline="true"  class="demo-form-inline">
          <el-form-item >
            <el-button type="primary" size="mini" @click="dialogFormVisible = true">添加员工</el-button>
          </el-form-item >
        </el-form>
      </el-col>
    </el-row>
    <el-dialog title="添加员工" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="员工姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择部门" :label-width="formLabelWidth">
          <el-select v-model="form.team" placeholder="选择部门">
            <el-option label="技术部" value="shanghai"></el-option>
            <el-option label="人事部" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addStaff">确 定</el-button>
      </div>
    </el-dialog>
    <el-table
    :data="tableData5.data"
    style="width: 100%"
    size="mini">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="手机号"
        prop="phone">
      </el-table-column>
      <el-table-column
        label="部门"
        prop="team">
      </el-table-column> 
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small">
            开除
          </el-button>
          <el-button
            type="text"
            size="small">
            离职
          </el-button>
          <el-button
            type="text"
            size="small">
            修改密码
          </el-button>
        </template>
      </el-table-column>
    </el-table> 
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData5.count">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'tabel',
  data () {
    let data = []
    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {
      tableData5: {
        default: {}
      },
      pageSize: 10,
      len: null,
      dialogFormVisible: false,
      form: {
        name: '',
        phone: '',
        team: ''
      },
      formLabelWidth: '120px',
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      polar: {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  created () {
    this.getStaff()
  },
  methods: {
    addStaff () {
      this.dialogFormVisible = false
      this.$http.post('/api/addStaffs', this.form).then((data) => {
        console.log(data)
        this.getStaff()
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.getStaff(val, this.pageSize)
    },
    getStaff (page = 1, pageSize = 5) {
      this.$http.get('/api/getlist', {
        page: page - 1,
        pageSize
      }).then((data) => {
        console.log(data.data)
        this.tableData5 = data.data
        // console.log(this.tableData5)
      })
    }
  }
}
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table tr {
  background: pink;
}
.echarts {
  height: 300px;
}
</style>
