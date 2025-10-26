import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.50044 14C3.00088 11.6 3.00088 10.4 3.00088 10C3.00088 9.6 3.00088 8.4 7.50044 6M7.50044 14C3.00088 16.4 3 17.2 3 18M7.50044 14C11.9991 11.6005 11.9991 10.4005 11.9991 10.0002C11.9991 9.6 11.9991 8.39953 7.50044 6M12 2C12 2.8 12 3.6 7.50044 6M7.50044 6L5.31262 4.7443C3.00057 3.28149 3 2.64075 3 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 14H14.5C13.9477 14 13.5 14.4477 13.5 15V19C13.5 19.5523 13.9477 20 14.5 20H18.5C19.0523 20 19.5 19.5523 19.5 19V15C19.5 14.4477 19.0523 14 18.5 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 20V21.5M18 20V21.5M15 12.5V14M18 12.5V14M13.5 15.5H12M13.5 18.5H12M21 15.5H19.5M21 18.5H19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AiDna',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
