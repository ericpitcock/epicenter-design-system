import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.50391 6V18L11.5 22M11.5 22V10M11.5 22L13.5 21M20.5039 6.01357V11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 10L20.5 6L11.5 2L2.5 6L11.5 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 4L7 8', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.5 11L8 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21.5 21L19.6213 19.1213M19.6213 19.1213C19.7216 19.0211 19.8147 18.9138 19.9 18.8003C20.2768 18.2989 20.5 17.6755 20.5 17C20.5 15.3431 19.1568 14 17.5 14C15.8431 14 14.5 15.3431 14.5 17C14.5 18.6568 15.8431 20 17.5 20C18.3284 20 19.0784 19.6642 19.6213 19.1213Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PackageSearch',
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
