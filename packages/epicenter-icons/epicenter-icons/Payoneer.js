import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '11.9999', 'cy': '12', 'r': '9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Payoneer',
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
