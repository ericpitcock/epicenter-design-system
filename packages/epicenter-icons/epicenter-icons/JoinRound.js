import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.9998 13V22H11.9998C6.47698 22 1.99983 17.5228 1.99983 12V2H10.9998V11C10.9998 12.1046 11.8953 13 12.9998 13H21.9998Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'JoinRound',
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
