<template>
    <div class="proList">
        <el-button type="primary" @click="opendialog">添加商品</el-button>
        <template>
  <el-table
    :data="productList"
    border
    style="width: 100%;margin-top:15px;">
    <el-table-column
      type="selection"
      width="40">
    </el-table-column>
    <el-table-column
    prop="id"
      label="商品编号"
      width="81">
    </el-table-column>
    <el-table-column
    prop="proName"
      label="商品名称"
      width="534">
    </el-table-column>
    <el-table-column
     prop="proDesc"
      label="商品描述"
      width="107">
    </el-table-column>
    <el-table-column
     prop="num"
      label="商品库存"
      width="81">
    </el-table-column>
    <el-table-column
     prop="size"
      label="商品尺寸"
      width="82">
    </el-table-column>
    <el-table-column
      label="是否下架"
      width="98">
      <template slot-scope="scope">
          <span>{{scope.row.statu | statuForm}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleEdit(scope.$index, scope.row)">更新</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

    <!-- 添加商品的对话框 -->
    <el-dialog title="添加商品" :visible.sync="AddProdialogFormVisible">
  <el-form :model="proForm" enctype="multipart/form-data" >
      <el-form-item label="请选择品牌">
      <el-cascader
      :options="brandList"
      v-model="selectedOptions"
      :props="brandprops"
      @change="handleChange">
    </el-cascader>
     <el-input  style="margin:5px 0;" placeholder="请输入产品名称"></el-input>
     <el-input  style="margin:5px 0;" placeholder="请输入产品描述"></el-input>
     <el-input  style="margin:5px 0;" placeholder="请输入产品数量"></el-input>
     <el-input  style="margin:5px 0;" placeholder="请输入产品尺码,如20-39"></el-input>
     <el-input  style="margin:5px 0;" placeholder="请输入商品原件"></el-input>
     <el-input  style="margin:5px 0;" placeholder="请输入商品折扣价"></el-input>
  </el-form-item>
 <el-upload
  class="upload-demo"
  action="http://127.0.0.1:3000/product/addProductPic"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  with-credentials:true
  :on-success='uploadDone'
  name='pic1'
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">*请选择上传三张图片</div>
</el-upload>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="AddProdialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addproduct">确 定</el-button>
  </div>
</el-dialog>
    </div>
</template>

<script>
import {queryProduct, querySecondCategoryPaging} from '@/api'
export default{
  data () {
    return {
      page: 1,
      pageSize: 6,
      productList: [],
      AddProdialogFormVisible: false,
      proForm: {},
      fileList2: [],
      brandList: [],
      selectedOptions: [],
      brandprops: {
        value: 'id',
        label: 'brandName',
        children: 'children'
      },
      addproList: {
        proName: '',
        oldPrice: '',
        price: '',
        proDesc: '',
        statu: '',
        num: '',
        brandId: ''
      }
    }
  },
  mounted () {
    //   通过接口查询商品列表
    queryProduct({page: this.page, pageSize: this.pageSize})
      .then(res => {
        // console.log(res)
        this.productList = res.rows
      })
  },
  filters: {
    /* 判断商品是否下架 */
    statuForm (statu) {
      if (statu === 1) {
        return '以上架商品'
      } else if (statu === 0) {
        return '以下架商品'
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      // console.log(file, fileList)
    },
    handlePreview (file) {
      // console.log(file)
    },
    /* 打开添加商品的对话框 */
    opendialog () {
      this.AddProdialogFormVisible = true
      querySecondCategoryPaging({page: this.page, pageSize: this.pageSize})
        .then(res => {
          console.log(res)
          this.brandList = res.rows
        })
    },
    /* 添加商品 */
    addproduct () {

    },
    handleChange (value) {
      // console.log(value)
    },
    uploadDone (response, file, fileList) {
      console.log(response)
    }
  }
}
</script>

<style lang="scss" scoped>
.proList{
}
</style>
