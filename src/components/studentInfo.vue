<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mb20">
      <el-breadcrumb-item>客服中心</el-breadcrumb-item>
      <el-breadcrumb-item>查询订单</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="search_box mb20">
      <div class="search_item">
        <div class="search_tip_margin_right">订单状态：</div>
        <el-select v-model="searchStatus" placeholder="请选择" class="search_input" clearable>
          <el-option
              v-for="item in searchStatusOptions"
              :key="item.id"
              :label="item.label"
              :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="search_item">
        <div class="search_tip_margin_right">售卖类型：</div>
        <el-select v-model="searchType" placeholder="请选择" class="search_input" clearable>
          <el-option
              v-for="item in searchTypeOptions"
              :key="item.id"
              :label="item.label"
              :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="search_item">
        <div class="search_tip_margin_right">订单号：</div>
        <el-input class="search_input" v-model="searchOrder" placeholder="请输入"></el-input>
      </div>
      <div class="search_item">
        <div class="search_tip_margin_right">会员手机号：</div>
        <el-input class="search_input" v-model="searchPhone" placeholder="请输入"></el-input>
      </div>
    </div>

    <div class="search_box mb20">

      <el-button type="primary" @click="page = 1; getList();">搜索</el-button>
      <el-button @click="restart">重置</el-button>
    </div>

    <el-table
        :data="list"
        v-loading="tableLoading"
        style="width: 100%;margin-top:15px;">
      <el-table-column
          prop="order_no"
          label="订单编号">
      </el-table-column>
      <el-table-column
          prop=""
          label="订单状态">
        <template slot-scope="scope">
          <el-link :underline="false" type="primary" v-if="scope.row.status === 0">待付款</el-link>
          <el-link :underline="false" type="warning" v-if="scope.row.status === 1">待发货</el-link>
          <el-link :underline="false" type="warning" v-if="scope.row.status === 2">已发货</el-link>
          <el-link :underline="false" type="info" v-if="scope.row.status === 3">已取消</el-link>
          <el-link :underline="false" type="success" v-if="scope.row.status === 4">交易完成</el-link>
          <el-link :underline="false" type="info" v-if="scope.row.status === 5">交易关闭</el-link>
          <el-link :underline="false" type="danger" v-if="scope.row.status === 20">全部退款</el-link>
          <el-link :underline="false" type="danger" v-if="scope.row.status === 21">部分退款</el-link>
        </template>
      </el-table-column>

      <el-table-column
          prop=""
          label="售卖类型">
        <template slot-scope="scope">
          <span v-if="scope.row.type === 1">展位直购</span>
          <span v-if="scope.row.type === 2">预售</span>
          <span v-if="scope.row.type === 3">定时购</span>
          <span v-if="scope.row.type === 4">资格购买</span>
          <span v-if="scope.row.type === 7">前置购</span>
          <span v-if="scope.row.type === 8">抽选</span>
        </template>
      </el-table-column>

      <el-table-column
          prop="price"
          label="订单总价">
      </el-table-column>

      <el-table-column
          prop="created_at"
          label="创建时间">
      </el-table-column>

      <el-table-column
          prop="receiving_tel"
          label="收件人电话">
      </el-table-column>



      <el-table-column
          prop=""
          label="操作">
        <template slot-scope="scope">
          <el-link type="primary" @click="toDetail(scope.row.order_no, scope.row.status)">查看订单</el-link>
        </template>
      </el-table-column>

    </el-table>

    <div style="width:100%;text-align:center;margin-top:50px;" v-if="pageShow">
      <el-pagination
          background
          layout="total, prev, pager, next,jumper"
          :current-page="page"
          @current-change="handleCurrentChange"
          :total="total_count"
          :page-size=20
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";
import {getUrlParameter} from '@/utils/common';

export default {
  name: "orderList",
  data() {
    return {
      searchStatus: '',
      searchStatusOptions: [
        {
          id: 0,
          label: '待付款'
        },
        {
          id: 1,
          label: '待发货'
        },
        {
          id: 2,
          label: '已发货'
        },
        {
          id: 3,
          label: '已取消'
        },
        {
          id: 4,
          label: '交易完成'
        },
        {
          id: 5,
          label: '交易关闭'
        },
        {
          id: 20,
          label: '全部退款'
        },
        {
          id: 21,
          label: '部分退款'
        }
      ],
      searchType: '',
      searchTypeOptions: [
        {
          id: 1,
          label: '展位直购'
        },
        {
          id: 2,
          label: '预售'
        },
        {
          id: 3,
          label: '定时购'
        },
        {
          id: 4,
          label: '资格购买'
        },
        {
          id: 7,
          label: '前置购'
        },
        {
          id: 8,
          label: '抽选'
        },
      ],
      searchOrder: '',
      searchPhone: '',
      list: [],
      tableLoading: false,
      page: 1,
      total_count: 0,
      pageShow: false
    }
  },
  methods: {
    getList() {
      let params = {
        page_num: this.page,
        page_size: 20,
        status: this.searchStatus,
        phone: this.searchPhone,
        order_no: this.searchOrder,
        type: this.searchType
      }
      api.searchOrdersList(params).then(res => {
        if (res.code === 1) {
          console.log(res)
          this.list = res.data;
          this.total_count = res.meta.total;
          this.pageShow = true;
        }
      }).catch(err => {
        this.$message.error(err.msg);
      })
    },
    restart() {
      this.searchStatus = '';
      this.searchPhone = '';
      this.searchOrder = '';
      this.timeArr = [];
      this.getList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    toDetail(id, status) {
      let searchStatus = this.searchStatus,
          searchOrder = this.searchOrder,
          searchPhone = this.searchPhone,
          searchType = this.searchType
      location.href = '/orderDetail?id=' + id + '&status=' + status + '&page=' + this.page + '&searchStatus=' + searchStatus + '&searchType=' + searchType +
          '&searchOrder=' + searchOrder + '&searchPhone=' + searchPhone
    }
  },
  mounted() {
    let page = Number(getUrlParameter(location.href, 'page'));
    let searchStatus = getUrlParameter(location.href, 'searchStatus');
    if (searchStatus) {
      this.searchStatus = Number(searchStatus)
    }
    this.searchOrder = getUrlParameter(location.href, 'searchOrder');
    this.searchPhone = getUrlParameter(location.href, 'searchPhone');
    let timeArr = getUrlParameter(location.href, 'timeArr');
    if (timeArr) {
      this.timeArr = JSON.parse(timeArr);
    }
    if (page) {
      this.page = page;
      this.pageShow = true;
    }
    this.getList();
  }
}
</script>

<style scoped>
.mb20 {
  margin-bottom: 20px;
}

.search_box {
  display: flex;
  justify-content: flex-start;
}

.search_item {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.search_input {
  width: 200px;
}

.search_tip_margin_right {
  margin-right: 10px;
  font-size: 16px;
}

.flex_start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.item_show {
  margin-bottom: 15px;
}

.left_nav {
  width: 180px;
  text-align: right;
  margin-right: 10px;
}

.left_nav span {
  color: #E50121;
}
</style>
