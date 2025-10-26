import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.0012 2.00112L18.9993 5.00098M18.9993 5.00098L22 8.00024M18.9993 5.00098L22 2.00024M18.9993 5.00098L16 8.00024', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.9983 12.0002V15.9973C21.9983 17.1019 21.1029 17.9973 19.9983 17.9973H11.499L7.58719 20.8423C6.92623 21.323 5.99902 20.8508 5.99902 20.0335V17.9973H4C2.89543 17.9973 2 17.1019 2 15.9973V4.00024C2 2.89567 2.89543 2.00024 4 2.00024H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CommentRemove02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
