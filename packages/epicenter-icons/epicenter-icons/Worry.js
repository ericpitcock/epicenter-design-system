import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 15.6L15.7307 15.4C15.0125 14.8667 14.1672 14.8667 13.4491 15.4L13.1798 15.6C12.4616 16.1333 11.6163 16.1333 10.8982 15.6L10.6288 15.4C9.91069 14.8667 9.06539 14.8667 8.34723 15.4L8 15.6579', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.00897 9H8M16 9H15.991', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Worry',
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
