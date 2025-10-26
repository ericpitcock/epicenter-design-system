import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.2153 16.0002C19.6684 19.532 16.1355 22.0002 12.0247 22.0002C6.48822 22.0002 1.99998 17.5231 1.99998 12.0002C1.99998 6.47738 6.48822 2.00023 12.0247 2.00023C17.2229 2.00023 21.497 5.94691 22 11.0002L19.5 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 11H8.5V16.5H15.5V11H14M10 11V9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5V11M10 11H14', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LockSync01',
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
