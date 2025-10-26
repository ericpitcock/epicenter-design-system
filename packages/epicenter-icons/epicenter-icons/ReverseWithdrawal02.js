import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 11C21.8626 10.7762 22 9.98695 22 9.04763V5.01588C22 3.90254 21.1046 3 20 3H4C2.89543 3 2 3.90254 2 5.01588V9.04763C2 9.98695 2.13739 10.7762 3 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '14', 'r': '7' })
const _hoisted3 = h('path', { 'd': 'M12 11C10.8954 11 10 11.6716 10 12.5C10 13.3284 10.8954 14 12 14C13.1046 14 14 14.6716 14 15.5C14 16.3284 13.1046 17 12 17M12 11C12.8708 11 13.6116 11.4174 13.8862 12M12 11V10M12 17C11.1292 17 10.3884 16.5826 10.1138 16M12 17L12 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 7H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ReverseWithdrawal02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
