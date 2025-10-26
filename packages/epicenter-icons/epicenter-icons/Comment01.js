import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.99902 12.4971H15.499M8.00391 7.49982L11.499 7.49707', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.9983 2H4C2.89543 2 2 2.89543 2 4V15.9971C2 17.1016 2.89543 17.9971 4 17.9971H5.99902V20.0333C5.99902 20.8506 6.92623 21.3227 7.58719 20.842L11.499 17.9971H19.9983C21.1029 17.9971 21.9983 17.1016 21.9983 15.9971V4C21.9983 2.89543 21.1029 2 19.9983 2Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Comment01',
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
