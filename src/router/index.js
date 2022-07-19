import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestIcon from '../views/TestIcon'
import TestButton from '../views/TestButton'
import TestLink from '../views/TestLink'
import TestRadio from '../views/TestRadio'
import TestCheckbox from '../views/TestCheckbox'
import TestInput from '../views/TestInput'
import TestSelect from '../views/TestSelect'
import TestSwitch from '../views/TestSwitch'
import TestUpload from '../views/TestUpload'
import TestForm from '../views/TestForm'
// 自定义测试平台
import TestBed202207191622Form from '../views/testbed/TestBed202207191622Form'

Vue.use(VueRouter)

/*
Upload
Form
*/
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // https://element.eleme.cn/#/zh-CN/component/icon 
  // http://localhost:8080/test-icon
  {
    path: '/test-icon',
    name: 'TestIcon',
    component: TestIcon
  },
  // https://element.eleme.cn/#/zh-CN/component/button
  {
    path: '/test-button',
    name: 'TestButton',
    component: TestButton
  },
  // https://element.eleme.cn/#/zh-CN/component/link 
  {
    path: '/test-link',
    name: 'TestLink',
    component: TestLink
  },
  // https://element.eleme.cn/#/zh-CN/component/radio
  {
    path: '/test-radio',
    name: 'TestRadio',
    component: TestRadio
  },
  // https://element.eleme.cn/#/zh-CN/component/checkbox
  {
    path: '/test-checkbox',
    name: 'TestCheckbox',
    component: TestCheckbox
  },
  // https://element.eleme.cn/#/zh-CN/component/input
  {
    path: '/test-input',
    name: 'TestInput',
    component: TestInput
  },
  // https://element.eleme.cn/#/zh-CN/component/select
  {
    path: '/test-select',
    name: 'TestSelect',
    component: TestSelect
  },
  // https://element.eleme.cn/#/zh-CN/component/switch
  {
    path: '/test-switch',
    name: 'TestSwitch',
    component: TestSwitch
  },
  // https://element.eleme.cn/#/zh-CN/component/upload
  {
    path: '/test-upload',
    name: 'TestUpload',
    component: TestUpload
  },
  // https://element.eleme.cn/#/zh-CN/component/form
  {
    path: '/test-form',
    name: 'TestForm',
    component: TestForm
  },
  // 自定义的实验平台 TODO
  {
    path: '/202207191622',
    name: 'TestBed202207191622Form',
    component: TestBed202207191622Form
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
