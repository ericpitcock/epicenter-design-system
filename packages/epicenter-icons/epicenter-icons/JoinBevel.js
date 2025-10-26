import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 14.5V2H11V13H22V22H9.5L2 14.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'JoinBevel',
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
