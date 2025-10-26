import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 22H4.50002C3.39544 22 2.50001 21.1046 2.50002 20L2.50016 3.99998C2.50017 2.89542 3.39559 2 4.50016 2H17.5C18.6046 2 19.5 2.89543 19.5 4V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 7H15M7 12H15', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 20V22H15.5L21.5 16L19.5 14L13.5 20Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LicenseDraft',
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
