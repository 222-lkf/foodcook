<template>
  <div class="home">  
    <div class="content">
      <div class="header">
        <div class="text">五星菜谱</div>
      </div>
      <div class="main">
        <div class="main-bg">
          <div class="search">
            <input type="text" />
          <div class="search-text">搜索</div>
          </div>
          <div class="sort">
            <div class="big-sort">
              <div v-for="(item,index) in bigSort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
              {{ item.name }}
              </div>
            </div>
            <div class="small-sort"></div>
          </div>
        </div>
        <van-tabs v-model="active" class="van-tabs">
          <van-tab 
            v-for="(item,index) in centent_nav_list" 
            :key="index" 
            :title="item.tab" 
            class="custom-tab">
            内容
          </van-tab>
        </van-tabs>
        </div>
    </div>
      <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import { reactive,toRefs,ref } from 'vue'
export default {
  components: {
    Footer
  },
   setup(){
    let data= reactive({
      bigSort: [
        {
          name:'荤菜',
          icon:'icon-wuhuarou',
        },
        {
          name:'素菜',
          icon:'icon-xinxianguoshu_xinxianshucaibaocai',
        },
        {
          name:'汤',
          icon:'icon-tang',
        },
        {
          name:'主食',
          icon:'icon-zhushi',
        },
        {
          name:'小吃',
          icon:'icon-gurouxianglian-',
        }
      ],
      centent_nav_list:[
        {
          tab:'早餐',
          data:[
            {
              pic:'xxxx',
              title:'鸡蛋',
              price:'10元',
              desc:'xxx'
            },
            {
              pic:'xxxx',
              title:'粥',
              price:'10元',
              desc:'xxx'
            }
          ]
        },
        {
          tab:'中餐',
          data:[
            {
              pic:'xxxx',
              title:'西红柿炒鸡蛋',
              price:'10元',
              desc:'xxx'
            }
          ]
        },
        {
          tab:'晚餐',
          data:[
            {
              pic:'xxxx',
              title:'西红柿鸡蛋面',
              price:'10元',
              desc:'xxx'
            }
          ]
        }
      ]
    })
    const active = ref(0)
    return {
      ...toRefs(data),
      active,
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  display: flex;
  flex-flow: column;
  height: 100%;
  font-size: 0.2rem;
  .content{
    flex: 1;
    overflow-y: auto;
    .header{
      background-image: linear-gradient(#ff6000, #ff8a00);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1px 1px 1px 1px;
      .text{
        font-size: 5px;
        font-weight: 600;
      }
    }
    .main{
      margin-top: -1px;
      .main-bg{
        background-image: linear-gradient(#fff, #fff);
        padding: 1px 1px 0px 1px;
        border-radius: 1px 1px 0 0;
      }
      .van-tabs{
        background-color: #5fe095; // 设置标签栏背景颜色
        border-radius: 2px; // 设置标签栏圆角
        padding: 2px; // 设置标签栏内边距
        .custom-tab {
           margin: 5px; // 设置每个标签的外边距
           transition: background-color 0.3s; // 添加过渡效果
           background-color: #bcd626;

          &:hover {
              background-color: #5336d6; // 悬停时改变背景颜色
          }
        }
      }
      .search{
        position: relative;
        input{
          width: 100%;
          height: 100%;
          border: 1px solid #ffc400;
          border-radius: 1px;
          height: 6px;
        }
        .search-text{
          position: absolute;
          right: -1px;
          top: 0px;
          font-size: 0.3rem;
          background-color: #ffc400;
          border-radius: 1px;
        }
      }
      .sort{
        padding: 1px 1px 0px 1px;
        .big-sort{
          display: flex;
          div{
            flex: 1;
            display: flex;
            justify-content: center;
            flex-flow: column;
            align-items: center;
            .icon{
              width: 0.5rem;
              height: 0.5rem;
              margin-bottom: 1px;
              // justify-content: center;
            }
          }

        }
      }
    }
  }

}
</style>