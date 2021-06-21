<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-table :data="rightsList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level === '0'">一级</el-tag>
            <el-tag type="success" v-else-if="scope.row.level === '1'">二级</el-tag>
            <el-tag type="warning" v-else="scope.row.level === '2'">三级</el-tag>
          </template>

        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import {getRightsList} from "network/rights"
  export default {
    name: "Rights",
    data(){
      return {
        rightsList: []
      }
    },
    created() {
      this.getRightsList();
    },
    methods: {
      getRightsList(){
        getRightsList().then( res => {
          // console.log(res);
          if(res.data.meta.status !== 200){
            return this.$message.error("获取数据失败")
          }
          this.rightsList = res.data.data
        })
      }
    }
  }
</script>

<style scoped>
  .el-card{
    margin-top: 15px;
  }
</style>