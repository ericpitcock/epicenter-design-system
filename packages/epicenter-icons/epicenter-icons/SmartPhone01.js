import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.5 2H7.5C6.39543 2 5.5 2.89543 5.5 4V20C5.5 21.1046 6.39543 22 7.5 22H16.5C17.6046 22 18.5 21.1046 18.5 20V4C18.5 2.89543 17.6046 2 16.5 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 19H12.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SmartPhone01',
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
