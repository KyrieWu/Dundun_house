<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go">
          我有账号,去<a href="login" target="_blank">登录</a>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input
          placeholder="请输入您的手机号"
          v-model="registerData.phone"
          name="phone"
        />
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址: 西安市高新软件园</div>
      <div class="beian">陕ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "RegisterItem",
  setup() {
    let registerData = reactive({
      phone: "",
      code: "",
      password: "",
      comfirePassword: "",
      agree: true,
    });

    return {
      registerData,
    };
  },
};
</script>

<style lang="less" scoped>
.register-container {
  // 注册内容

  // 底部
  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
        cursor: pointer;

        &:hover {
          color: #4cb9fc;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>