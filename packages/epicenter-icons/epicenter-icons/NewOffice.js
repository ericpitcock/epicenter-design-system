import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 13L7.75027 14.1518L9.43717 14.0855L9.66579 15.7839L11 16.8342L10.1 18.2845L10.4572 19.9599L8.84973 20.4834L8.06283 22L6.5 21.3518L4.93717 22L4.15027 20.4834L2.54277 19.9599L2.9 18.2845L2 16.8342L3.33421 15.7839L3.56283 14.0855L5.24973 14.1518L6.5 13Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 9H6M11 9H10M7 6H6M11 6H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 15H17.5M18.5 11H17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 7.99997V21L22 21V9.99997C22 8.8954 21.1046 7.99997 20 7.99997H14ZM14 7.99997V4C14 2.89543 13.1046 2 12 2H5C3.89543 2 3 2.89543 3 4V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NewOffice',
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
