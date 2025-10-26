import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 19.0004H4C2.89543 19.0004 2 18.1049 2 17.0004V5.00037C2 3.8958 2.89543 3.00037 4 3.00037H20C21.1046 3.00037 22 3.8958 22 5.00037V10.0004', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 7.00037L10.9923 9.74372C11.615 10.0859 12.385 10.0859 13.0077 9.74372L18 7.00037', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21.6632 15.9997C21.1015 14.8173 19.8962 13.9997 18.5 13.9997C16.567 13.9997 15 15.5667 15 17.4997C15 19.4327 16.567 20.9997 18.5 20.9997C20.0853 20.9997 21.5695 19.9458 22 18.5004M21.6632 15.9997V13.5004M21.6632 15.9997L19.4277 16.1578', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RecoveryMail',
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
