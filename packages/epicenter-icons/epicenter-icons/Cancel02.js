import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.11994 18.9973L11.9973 14.1199L16.8739 18.9964L18.9952 16.8779L14.1173 11.9999L19.0014 7.12135L16.8828 5.00003L11.9973 9.88L7.11994 5.00003L5 7.11997L9.87739 11.9999L5 16.8773L7.11994 18.9973Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cancel02',
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
