import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 6.5V2H15.5L12.5 6.5H5V11H9.5L5 17.5V22H8.5L11.5 17.5H19V13H14.5L19 6.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Deviantart',
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
