import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 8.02344L6 16.0234', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '6', 'cy': '18.0234', 'r': '2', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '6', 'cy': '6.02344', 'r': '2', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '18', 'cy': '18.0234', 'r': '2', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 11.0234H18.009M18 6.02344H18.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GitPullRequestDraft',
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
