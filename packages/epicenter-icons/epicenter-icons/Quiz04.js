import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5 20V6C20.5 4.89543 19.6046 4 18.5 4H14C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4H5.5C4.39543 4 3.5 4.89543 3.5 6V20C3.5 21.1046 4.39543 22 5.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.5 10L10.5 10', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 11L14.5 12L17.5 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6.5 16L10.5 16', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.5 17L14.5 18L17.5 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Quiz04',
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
