<template>
    <div id="Dialog">
        <div class="dialog-box" v-show="isShow">
            <div class="dialog-title">
                <span> {{title}}</span>
                <a href="#" class="close" @click="close" title="关闭">X</a>
            </div>
            <hr />
            <slot class="dialog-body" tag="p">
            </slot>
            <hr />
            <div class="dialog-footer">
                <button class="clear" @click="close">取消</button>
                <button class="enter" @click="enter">确定</button>
            </div>
        </div>
        <div class="dialog-mask" v-show="isShow" />
    </div>
</template>
<script>
export default {
    name: 'Dialog',
    props: {
        title: {
            default: '标题',
            type: String
        },
        isShow: {
            default: false,
            type: Boolean
        }
    },
    components: {},
    data() {
        return {

        };
    },
    methods: {
        // 确定
        enter() {
            this.$emit("enter")
        },
        // 关闭
        close() {
            this.$emit("close")
        }
    },
    created() {},
}
</script>
<style lang="less" scoped>
.dialog-box {
    width: 500px;
    min-width: 120px;
    // height: 100%;
    position: fixed;
    top: 30%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    padding: 5px;
    background-color: white;
    border-radius: 2%;

    .dialog-title {
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        padding: 0 10px;

        .close {
            float: right;
            text-decoration: none;
        }
    }

    .dialog-body {}

    .dialog-footer {
        height: 30px;

        button {
            float: right;
            width: 70px;
            height: 30px;
            border-radius: 3%;
        }

        // 确认
        button.enter {
            background-color: #409eff;
            border-color: #409eff;

        }

        // 取消
        button.clear {}
    }
}

.dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    z-index: 1;
    opacity: 0.8;
}
</style>