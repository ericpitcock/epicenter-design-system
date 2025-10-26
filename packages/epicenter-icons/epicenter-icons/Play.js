import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.5241 19.0621C6.85783 19.4721 6 18.9928 6 18.2104V5.78956C6 5.00724 6.85783 4.52789 7.5241 4.93791L17.6161 11.1483C18.2506 11.5388 18.2506 12.4612 17.6161 12.8517L7.5241 19.0621Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Play',
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
