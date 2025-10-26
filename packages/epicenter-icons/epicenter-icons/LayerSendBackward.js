import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.7442 12.5L21.3982 9.95149C22.2006 9.58984 22.2006 8.41016 21.3982 8.04851L12.7981 4.17208C12.289 3.94264 11.711 3.94264 11.2019 4.17208L2.60175 8.04851C1.79941 8.41016 1.79942 9.58984 2.60176 9.95149L8.25583 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 19.5V9M15 17L12 20L9 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LayerSendBackward',
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
