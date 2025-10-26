import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '11.5', 'cy': '7.5', 'r': '3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 6V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 13V13.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 20V16.9852C18 16.364 17.7184 15.7658 17.1838 15.4494C15.6574 14.546 13.6714 14 11.5 14C9.32863 14 7.34261 14.546 5.81618 15.4494C5.28162 15.7658 5 16.364 5 16.9852V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserWarning02',
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
