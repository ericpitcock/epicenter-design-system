import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 21.5V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V21.5L8 19.5L12 22L16 19.5L20 21.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 7.5H13.5C14.3284 7.5 15 8.17157 15 9M12 7.5H10.5C9.67157 7.5 9 8.17157 9 9V9.5C9 10.3284 9.67157 11 10.5 11H13.5C14.3284 11 15 11.6716 15 12.5V13C15 13.8284 14.3284 14.5 13.5 14.5H12M12 7.5V6M12 14.5H10.5C9.67157 14.5 9 13.8284 9 13M12 14.5V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ReceiptDollar',
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
