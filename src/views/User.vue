<template>
  <div class="user">
    <template>
      <el-table
        :data="userList"
        border
        style="width: 100%"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="212"
        >
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话"
          width="390"
        >
        </el-table-column>
        <el-table-column
          prop="isDelete"
          label="状态"
          width="212"
        >
          <template slot-scope="scope">
            <span>{{scope.row.isDelete | isDeleteForm}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="255"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="disableBtn(scope.row.id,scope.row)"
              :class='{"btnActive":toggleStatus===false}'
            >{{toggleStatus?'禁用':'启用'}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import { getQueryUser, updateUserStatus } from '@/api'
export default {
  data () {
    return {
      userList: [],
      page: 1,
      pageSize: 5,
      toggleStatus: true
    }
  },
  methods: {
    init () {
      getQueryUser({ page: this.page, pageSize: this.pageSize }).then(res => {
        console.log(res.rows)
        this.toggleStatus = !!res.rows[0].isDelete
        this.userList = res.rows
      })
    },
    disableBtn (id, row) {
      console.log(row)
      this.toggleStatus = !this.toggleStatus
      if (this.toggleStatus) {
        this.userList[0].isDelete = 1
        this.$message({
          message: '已禁用',
          type: 'error'
        })
      } else {
        this.userList[0].isDelete = 0
        this.$message({
          message: '已启用',
          type: 'success'
        })
      }
      updateUserStatus({ id: id, isDelete: row.isDelete }).then(res => {
      })
    }
  },
  created () {
    this.init()
  },
  /* 过滤器 */
  filters: {
    isDeleteForm (isDelete) {
      if (isDelete === 1) {
        return '已启用'
      } else if (isDelete === 0) {
        return '已禁用'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btnActive{
    background-color: #5cb85c;
    border:1px solid #5cb85c;
}
</style>
