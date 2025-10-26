import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.50391 6V18L11.5 22M11.5 22V10M11.5 22L14.5 20.6672M20.5039 6.01357V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 10L20.5 6L11.5 2L2.5 6L11.5 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 4L7 8', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.5 11L8 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15.5 17H21.5M18.5 20V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PackageAdd',
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
