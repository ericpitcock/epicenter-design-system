import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.00015 12.9998L13.5 2.99997V11H18L10.5002 20.9998V12.9998H6.00015Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Energy',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
