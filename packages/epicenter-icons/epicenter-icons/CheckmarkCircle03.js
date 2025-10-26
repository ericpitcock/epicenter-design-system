import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 12.5C8 12.5 10 13 11.5 16C11.5 16 17.0588 6.83333 22 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CheckmarkCircle03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
