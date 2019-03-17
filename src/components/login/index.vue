<template>
  <div class="show_17_login">
    <div class="show_17_login_flex">
      <div class="show_17_login_logo">
        <div>
          <!-- <img
            src="http://www.logofree.cn/themes/logofree/img/example.png"
            alt=""
          > -->
        </div>
      </div>
      <div class="show_17_login_form">
        <form
          @submit.prevent="login"
          method="post"
          novalidate
        >
          <div class="show_17_form_container">
            <div class="show_17_user show_17_login_input container">
              <div class="form-group row">
                <div class="col-2">
                  <label
                    for="inputPassword"
                    class="col-form-label"
                  >账号</label>
                </div>

                <div class="col-sm-10 col-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputUsers"
                    placeholder="Users"
                    name="users"
                    v-model="users"
                  >
                </div>
              </div>
            </div>
            <div class="show_17_password show_17_login_input container">
              <div class="form-group row">
                <div class="col-sm-2 col-2">
                  <label
                    for="inputPassword"
                    class="col-form-label"
                  >密码</label>
                </div>

                <div class="col-sm-10 col-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    name="password"
                    v-model="password"
                  >
                </div>
              </div>
            </div>

            <div class="show_17_password show_17_login_input container">
              <div class="form-group row">
                <div class="col-sm-12 col-12">
                  <button
                    class="btn btn-primary btn-block"
                    type="submit"
                    value="Submit"
                  >登陆</button>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
// import './index.less';
import { Indicator } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      users: "",
      password: ""
    };
  },
  created() {

  },
  methods: {
    addQuery: function() {
    },
    login: function() {

      this.$http
        .post("http://localhost:3000/users", {
          users: this.users,
          password: this.password
        })
        .then((response) => {
          if (response.data.status === 200) {
            Toast(response.data.message);
            this.$router.push({
              //核心语句
              path: "/home", //跳转的路径
            });
          }
          if (!response.data.require) {
            Toast(response.data.message);
          }
        })
        .catch(function(error) {
          console.log(error, "error");
        });
      //   if (!this.users || !this.password) {
      //     Toast("请输入正确的账号或者密码");
      //   }
    }
  }
};
</script>
<style lang="less" scope>
.show_17_login {
  background: url("../../assets/login-bg2.jpg");
  background-repeat: no-repeat; //不重复
  background-size: cover; // 满屏
  background-position: center center;
  height: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  .show_17_login_flex {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .show_17_login_logo {
    img {
      width: 80px;
      height: 80px;
    }
  }
  .show_17_login_form {
    .show_17_form_container {
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      .show_17_login_input {
        padding: 0 35px;
      }
      label {
        font-weight: bold;
      }
      button {
        letter-spacing: 14px;
        margin-top: 15px;
      }
    }
  }
}
</style>

