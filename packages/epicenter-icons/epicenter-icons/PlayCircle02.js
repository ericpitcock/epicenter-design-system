import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })
const _hoisted2 = h('path', { 'd': 'M15.4527 11.073L11.125 8.64224C10.4009 8.23554 9.5 8.74946 9.5 9.5692V14.4308C9.5 15.2505 10.4009 15.7645 11.125 15.3578L15.4527 12.927C16.1824 12.5171 16.1824 11.4829 15.4527 11.073Z', 'fill': 'currentColor' })

export default defineComponent({
    name: 'PlayCircle02',
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
