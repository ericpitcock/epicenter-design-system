import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 9C12 4.5 14 4 16 4C16 7 14.5 9 12 9ZM12 9C12 4.5 10 4 8 4C8 7 9.5 9 12 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 4C10 4 10.5 2.5 12 2C13.5 2.5 14 4 14 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 9V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13C12.25 12.3333 13.2 11 15 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15.8399 20.4145L16.7416 16.2097C16.8751 15.5871 16.4005 15 15.7638 15H8.23731C7.60088 15 7.12637 15.5866 7.2594 16.209L8.15802 20.4132C8.35522 21.3358 9.17037 21.9952 10.1138 21.9952H13.8844C14.8273 21.9952 15.6422 21.3365 15.8399 20.4145Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FlowerPot',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
