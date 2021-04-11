import VioletForm from '../'
import VioletFormItem from '../../formitem'
import VioletInput from '../../input'
import VioletButton from '../../button'

export default {
    title: 'VioletForm',
    component: VioletForm
}

export const Login = () => ({
    components: { VioletForm, VioletFormItem, VioletInput, VioletButton },
    template: `
    <violet-form class="form" ref="form" :model="user" :rules="rules">
        <violet-form-item label="用户名" prop="username">
        <violet-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></violet-input>
        </violet-form-item>
        <violet-form-item label="密码" prop="password">
        <violet-input type="password" v-model="user.password"></violet-input>
        </violet-form-item>
        <violet-form-item>
        <violet-button type="primary" @click="login">登 录</violet-button>
        </violet-form-item>
    </violet-form>
    `,
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码'
                    },
                    {
                        min: 6,
                        max: 12,
                        message: '请输入6-12位密码'
                    }
                ]
            }
        }
    },
    methods: {
        login() {
            console.log('button')
            this.$refs.form.validate(valid => {
                if (valid) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                    return false
                }
            })
        }
    }
})
