import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22.0001 13.0001V22.0001H2.00009V2.00012H11.0001V13.0001H22.0001Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'JoinStraight',
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
