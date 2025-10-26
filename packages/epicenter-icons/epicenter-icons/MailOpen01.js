import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 8.5L10.5 13.5M22 8.5L13.5 13.5', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.45501 8.20424L10.91 2.70848C11.5728 2.27767 12.4272 2.27767 13.09 2.70849L21.545 8.20424C21.8288 8.38871 22 8.70421 22 9.04269V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9.04269C2 8.70421 2.17122 8.38871 2.45501 8.20424Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 20.5L13.2494 13.4995C12.519 12.9152 11.481 12.9152 10.7506 13.4995L2 20.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MailOpen01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
