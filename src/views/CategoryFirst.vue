<template>
    <div class="cgFirst">
      <el-button type="primary" @click="openDialog">添加分类</el-button>
      <template>
  <el-table
    ref="multipleTable"
    :data="cgFirstList"
    tooltip-effect="dark"
    style="width: 100%;margin-top:15px"
    border
  >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="分类的编号"
     >
    </el-table-column>
    <el-table-column
      prop="categoryName"
      label="分类名称"
      >
    </el-table-column>
  </el-table>
</template>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      style="margin-top:15px">
    </el-pagination>

 <!--打开添加分类的对话框 -->
 <el-dialog title="添加分类" :visible.sync="addCatedialogFormVisible">
  <el-form :model="form" ref="form">
    <el-form-item>
      <el-input v-model="form.categoryName" autocomplete="off" placeholder="请输入分类的名称"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addCatedialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addCate('form')">添加</el-button>
  </div>
</el-dialog>

    </div>
</template>
<script>
import {queryTopCategoryPaging, addTopCategory} from '@/api'
export default{
  data () {
    return {
      page: 1,
      pageSize: 5,
      cgFirstList: [],
      currentPage: 1,
      total: 1,
      addCatedialogFormVisible: false,
      form: {
        categoryName: ''
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      /* 查询一级分类的数据 */
      queryTopCategoryPaging({ page: this.page, pageSize: this.pageSize })
        .then(res => {
          console.log(res)
          this.cgFirstList = res.rows
          this.total = res.total
        })
    },
    /* 打开添加分类的对话框 */
    openDialog () {
      this.addCatedialogFormVisible = true
    },
    /* 添加分类 */
    addCate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addTopCategory(this.form)
            .then(res => {
              this.addCatedialogFormVisible = false
              // this.pageSize++
              this.init()
            })
        } else {

        }
      })
    },
    /*  分页 */
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.init()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.page = val
      this.init()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
