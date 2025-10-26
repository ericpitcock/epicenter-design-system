import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 10.5C14 11.6046 13.1046 12.5 12 12.5C10.8954 12.5 10 11.6046 10 10.5C10 9.39543 10.8954 8.5 12 8.5C13.1046 8.5 14 9.39543 14 10.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 8.99909V2C11.8431 2 10.5 3.30992 10.5 4.92579V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.1818 10.4999L20 14.052C19.1979 15.4365 17.4215 15.9109 16.0322 15.1116L12 12.5871', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9.81672 10.5002L4 14.0519C4.80219 15.4369 6.57885 15.9114 7.96829 15.1118L12 12.5875', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.5 16.5L13.9996 22H10L10.5 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WindPower03',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
