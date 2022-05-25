import type { FormInstance } from "element-plus";

export function getValidator() {
  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    pass: "",
    name: "",
  });
  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === "") {
      callback(new Error("请输入密码"));
    }
  };

  const checkName = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error("请输入用户名"));
    }
  };

  return {
    ruleFormRef,
    ruleForm,
    validatePass,
    checkName,
  };
}
