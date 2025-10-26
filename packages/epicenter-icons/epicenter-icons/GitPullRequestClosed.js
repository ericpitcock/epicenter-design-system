import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 8.02344L6 16.0234', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 11.5234L18 16.0234', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '6', 'cy': '18.0234', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '6', 'cy': '6.02344', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted5 = h('circle', { 'cx': '18', 'cy': '18.0234', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M20 4.02344L18 6.02344M18 6.02344L16 8.02344M18 6.02344L20 8.02344M18 6.02344L16 4.02344', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GitPullRequestClosed',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
